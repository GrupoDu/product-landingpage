import { NextResponse } from "next/server";
import Mailgun from "mailgun.js";
import FormData from "form-data";

export const POST = async (req: Request) => {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.API_KEY || "API_KEY",
  });
  try {
    const body = await req.json();
    const { nome, email, telefone, empresa, produto, mensagem } = body;

    if (!nome || !email || !telefone || !produto || !mensagem) {
      return NextResponse.json(
        { error: "Por favor, preencha todos os campos" },
        { status: 400 }
      );
    }

    const data = await mg.messages.create("grupodu.com.br", {
      from: "Grupodu Contato<email@grupodu.com.br>",
      to: ["Dom Metal<dommetalind@gmail.com>"],
      subject: "Email enviado pelo site",
      text: `Solicitação de contato`,
      html: `<h1>Informações do contato</h1>
        <h3>Nome completo</h3>
        <p>${nome}</p>
        <hr />
        <h3>Email</h3>
        <p>${email}</p>
        <hr />
        <h3>Telefon</h3>
        <p>${produto}</p>
        <hr />
        <h3>Empresa</h3>
        <p>${empresa ? empresa : "Empresa não informada"}</p>
        <hr />
        <h3>Mensagem</h3>
        <p>${mensagem}</p>
        <hr />
        <br />
        <h4>Contato enviado pelo site de produto.</h4>
        `,
    });

    console.log(data);

    return NextResponse.json(
      { message: "Enviado com sucesso" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
  }
};
