"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { registrationFormStates, registrationFormCountries } from "@/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SignupPage() {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
    birthday: "",
    country: "",
    state: "",
  };

  const router = useRouter();
  const [user, setUser] = useState(initialFormData);

  const onSignup = async () => {
    try {
      const response = await axios.post("/api/users/signup", user);
      router.push("/login");
    } catch (error) {
      console.log("Falha no cadastro...", error.message);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-11/12 m-auto lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              Cadastre-se aqui
            </CardTitle>
            <CardDescription className="text-center">
              Preencha o formulário abaixo para se cadastrar
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                type="text"
                placeholder=""
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder=""
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="birthday">Data de Nascimento</Label>
              <Input
                id="birthday"
                type="date"
                onChange={(e) => setUser({ ...user, birthday: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Select
                onValueChange={(value) => setUser({ ...user, country: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um País" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {registrationFormCountries.map((item) => (
                      <SelectItem key={item.id} value={item.id}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Select
                onValueChange={(value) => setUser({ ...user, state: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {registrationFormStates.map((item) => (
                      <SelectItem key={item.id} value={item.id}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <span className=" text-blue-600 hover:underline text-sm">
              Esqueceu a senha?
            </span>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" onClick={onSignup}>
              Cadastrar
            </Button>
            <p className="mt-2 text-xs text-center text-gray-700">
              {" "}
              Já possui cadastro?{" "}
              <span className=" text-blue-600 hover:underline">
                <Link href={"/login"}>Entrar</Link>
              </span>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
