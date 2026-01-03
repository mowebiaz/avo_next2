import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { name, email, message, websiteavo } = await request.json()

    if (websiteavo) {
      return NextResponse.json({ success: true })
    }

    await resend.emails.send({
      from: 'AvoriazLoc <avo@email.avoriazloc.fr>',
      to: 'morgane.couvet@gmail.com',
      subject: `Nouveau message de ${name} sur avoriazloc.fr`,
      replyTo: email,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
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
