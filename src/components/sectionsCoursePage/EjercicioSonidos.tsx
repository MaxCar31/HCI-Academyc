"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

export default function EjercicioSonidos() {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  })

  const handleAnswer = (question: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: value,
    }))
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Barra de progreso */}
      <div className="mb-8">
        <Progress value={20} className="h-2 bg-green-100"/>
      </div>

      {/* Título del ejercicio */}
      <h1 className="text-xl font-medium text-gray-800 mb-8">
        Identifica el uso correcto de los sonidos en las siguientes oraciones. Si no necesitas un sonido especial, selecciona <span className="font-bold">x</span>.
      </h1>

      {/* Preguntas */}
      <div className="space-y-6">
        <div className="space-y-2">
          <p>
            <span className="font-semibold">A:</span> ¿Sabes cómo se pronuncia el sonido{" "}
            <Select value={answers.q1} onValueChange={(value) => handleAnswer("q1", value)}>
              <SelectTrigger className="w-24 inline-flex border-green-500">
                <SelectValue placeholder=" " />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rr">rr</SelectItem>
                <SelectItem value="x">x</SelectItem>
              </SelectContent>
            </Select>
            {" "}en la palabra "carro"?
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-semibold">B:</span> Sí, y también sé que suena diferente al sonido{" "}
            <Select value={answers.q2} onValueChange={(value) => handleAnswer("q2", value)}>
              <SelectTrigger className="w-24 inline-flex border-green-500">
                <SelectValue placeholder=" " />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="r">r</SelectItem>
                <SelectItem value="x">x</SelectItem>
              </SelectContent>
            </Select>
            {" "}en "pero".
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-semibold">A:</span> ¿Y sabes cómo identificar el sonido{" "}
            <Select value={answers.q3} onValueChange={(value) => handleAnswer("q3", value)}>
              <SelectTrigger className="w-24 inline-flex border-green-500">
                <SelectValue placeholder=" " />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ñ">ñ</SelectItem>
                <SelectItem value="x">x</SelectItem>
              </SelectContent>
            </Select>
            {" "}en palabras como "niño"?
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-semibold">B:</span> Claro, ese sonido no existe en turco, ¿verdad?
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-semibold">A:</span> Exacto, y también es importante practicar el sonido{" "}
            <Select value={answers.q4} onValueChange={(value) => handleAnswer("q4", value)}>
              <SelectTrigger className="w-24 inline-flex border-green-500">
                <SelectValue placeholder=" " />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="j">j</SelectItem>
                <SelectItem value="x">x</SelectItem>
              </SelectContent>
            </Select>
            {" "}en palabras como "jugar".
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-semibold">B:</span> ¡Perfecto! Practicar los sonidos{" "}
            <Select value={answers.q5} onValueChange={(value) => handleAnswer("q5", value)}>
              <SelectTrigger className="w-24 inline-flex border-green-500">
                <SelectValue placeholder=" " />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="especiales">especiales</SelectItem>
                <SelectItem value="x">x</SelectItem>
              </SelectContent>
            </Select>
            {" "}te ayudará a mejorar tu pronunciación.
          </p>
        </div>
      </div>
    </div>
  )
}
