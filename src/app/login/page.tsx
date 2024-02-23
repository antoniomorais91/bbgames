"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

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

export default function SignupPage() {
  const formLogin = {
    email: "",
    password: "",
  };

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(formLogin);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      router.push("/");
    } catch (error: any) {
      console.log("Falha no login...", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-11/12 m-auto lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              {loading ? "Processando" : "Login"}
            </CardTitle>
            <CardDescription className="text-center">
              Insira os dados abaixo e clique em entrar.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
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
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" onClick={onLogin}>
              Entrar
            </Button>
            <p className="mt-2 text-xs text-center text-gray-700">
              {" "}
              Ainda não é cadastrado?{" "}
              <span className=" text-blue-600 hover:underline">
                <Link href={"/signup"}>Clique aqui</Link>
              </span>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
