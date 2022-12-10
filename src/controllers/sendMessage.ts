import axios from "axios";

export async function sendMessage(req, res) {
  try {
    const { message, user, email, name, phone } = req.body;

    const TOKEN = process.env.BOT_TOKEN;

    const URI = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    await axios.post(URI, {
      chat_id: "-1001577546710",
      parse_mode: "html",
      text: `<b>НОВОЕ СООБЩЕНИЕ</b>\nОтправитель: <b>${name}</b>\nTelegram: <b>${user}</b>\nПочта: <b>${email}</b>\nНомер телефона: <b>${phone}</b>\nСообщение: <b>${message}</b>`,
    });

    return res.json({
      message: `Сообщение: ${message}; от: ${user} успешно отправлено`,
      status: "success",
    });
  } catch (error) {
    return res.json({
      message: error,
      status: "error",
    });
  }
}
