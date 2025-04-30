'use client'

import { useRef } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { checkIfWeekExists, createWeek } from '@/app/actions/prisma_weeks'
import { UserMessage } from '@/src/components/UserMessage/UserMessage'
import { toast } from 'sonner'
import { IoMdAddCircle } from 'react-icons/io'
import './AddWeekForm.scss'

export function AddWeekForm({ season }) {
  const formRef = useRef(null)
  const btnFormRef = useRef(null)

  const handleClick = () => {
    formRef.current.style.display = 'flex'
    btnFormRef.current.style.display = 'none'
  }

  const {
    control,
    handleSubmit,
    register,
    reset,
    trigger,
    setError,
    formState: { errors, isSubtmitting },
  } = useForm({
    defaultValues: {
      newWeek: [{ entryDate: '', price: '', disponibility: false }],
    },
    mode: 'onTouched',
  })

  const { fields, append } = useFieldArray({
    control,
    name: 'newWeek',
  })

  const onSubmit = async (data) => {
    // checks if there are any duplicate dates in the form.
    const dates = data.newWeek.map((w) => w.entryDate)
    const dupes = dates
      .filter((d, i, arr) => d && arr.indexOf(d) !== i)
      .filter((d, i, arr) => arr.indexOf(d) === i) // unique
    if (dupes.length) {
      data.newWeek.forEach((w, i) => {
        if (dupes.includes(w.entryDate)) {
          setError(`newWeek.${i}.entryDate`, {
            type: 'manual',
            message: 'Date en double dans le formulaire',
          })
        }
      })
      return
    }

    const result = await createWeek(data, season)
    if (result?.error) {
      console.log(result.error)
      toast.error(result.error)
    } else {
      toast.success('Semaine(s) ajoutée(s)')
    }
    reset()
    formRef.current.style.display = 'none'
    btnFormRef.current.style.display = 'flex'
  }

  return (
    <>
      <div ref={btnFormRef}>
        <button
          className="btn-addweek"
          //ref={btnFormRef}
          onClick={handleClick}
        >
          Ajouter une semaine
        </button>
      </div>

      <div
        ref={formRef}
        className="form-addWeek"
        style={{ display: 'none' }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="new-week"
            >
              <div>
                {/* mettre htmlfor, id... ? */}
                <label htmlFor="date">Date d&apos;arrivée:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  {...register(`newWeek.${index}.entryDate`, {
                    required: 'Veuillez renseigner la date',
                    validate: async (value) => {
                      const exists = await checkIfWeekExists(value)
                      return !exists || 'Cette semaine existe déjà.'
                    },
                  })}
                />
                {errors?.newWeek?.[index]?.entryDate && (
                  <p className="message-error">
                    {errors.newWeek[index].entryDate.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="price">Prix (€):</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  {...register(`newWeek.${index}.price`, {
                    required: 'Veuillez renseigner le prix',
                  })}
                />
                {errors?.newWeek?.[index]?.price && (
                  <p className="message-error">
                    {errors.newWeek[index].price.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="disponibility">Disponible ?</label>
                <input
                  type="checkbox"
                  id="disponibility"
                  name="disponibility"
                  {...register(`newWeek.${index}.disponibility`)}
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            className="btn-add"
            disabled={isSubtmitting}
            onClick={async () => {
              const valid = await trigger()
              if (valid) {
                append({ entryDate: '', price: '', disponibility: false })
              } else {
                toast.error("Vous n'avez pas rempli correctement le formulaire")
              }
            }}
          >
            <IoMdAddCircle />
          </button>

          <button
            type="submit"
            disabled={isSubtmitting}
          >
            {isSubtmitting ? 'loader' : 'Envoyer'}
          </button>
        </form>
      </div>
    </>
  )
}
