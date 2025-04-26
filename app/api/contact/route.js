import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    await resend.emails.send({
      from: 'AvoriazLoc <avo@email.avoriazloc.fr>',
      to: 'morgane.couvet@gmail.com',
      subject: `Nouveau message de ${name}`,
      //reply_to: `${email}`,
      //reply_to: email,
/*       replyTo: {
        name: name,
        email: email,
      }, */
      replyTo: email,
      
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[api/contact]:', err)
    return NextResponse.json(
      { success: false, error: "Impossible d'envoyer les message" },
      { status: 500 },
    )
  }
}
