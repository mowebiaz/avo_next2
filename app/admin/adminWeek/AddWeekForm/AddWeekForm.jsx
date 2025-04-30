'use client'

import { useRef } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { checkIfWeekExists, createWeek } from '@/app/actions/prisma_weeks'
import { UserMessage } from '@/src/components/UserMessage/UserMessage'
import { toast } from 'sonner';
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
    formState: { errors, isSubtmitting },
  } = useForm({
    defaultValues: {
      newWeek: [{ entryDate: '', price: '', disponibility: false }],
    },
  })

  const { fields, append } = useFieldArray({
    control,
    name: 'newWeek',
  })

  const onSubmit = async (data) => {
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
          ref={btnFormRef}
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
              const isValid = await trigger()
              if (isValid) {
                append({ entryDate: '', price: '', disponibility: false })
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
