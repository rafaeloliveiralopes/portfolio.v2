import nodemailer from "nodemailer";

const FIELD_LIMITS = {
  fullName: 120,
  phone: 40,
  email: 254,
  subject: 160,
  message: 5000,
};

function readField(body, field) {
  const value = body?.[field];

  if (typeof value !== "string") return null;

  const normalized = value.trim();
  if (!normalized || normalized.length > FIELD_LIMITS[field]) return null;

  return normalized;
}

function sanitizeHeader(value) {
  return value.replace(/[\r\n]+/g, " ");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Método ${req.method} não permitido`);
  }

  const fullName = readField(req.body, "fullName");
  const phone = readField(req.body, "phone");
  const email = readField(req.body, "email");
  const subject = readField(req.body, "subject");
  const message = readField(req.body, "message");

  if (
    !fullName ||
    !phone ||
    !email ||
    !subject ||
    !message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return res.status(400).json({ error: "Dados de contato inválidos." });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    return res.status(503).json({ error: "Serviço de email indisponível." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: sanitizeHeader(subject),
    text: `Nome: ${fullName}\nTelefone: ${phone}\nEmail: ${email}\nMensagem: ${message}`,
    disableFileAccess: true,
    disableUrlAccess: true,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch {
    return res.status(500).json({ error: "Erro ao enviar o email." });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "16kb",
    },
  },
};
