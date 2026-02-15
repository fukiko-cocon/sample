import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log({ email, password })
    // ここでAPI送信など
  }

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center p-4 bg-background">
      {/* スマホ幅に収めるコンテナ */}
      <div className="w-full max-w-[380px]">
        <h1 className="text-2xl font-semibold text-center text-foreground mb-8">
          ログイン
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="h-11"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">パスワード</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="h-11"
            />
          </div>

          <Button type="submit" size="lg" className="w-full h-12 mt-2">
            送信
          </Button>
        </form>
      </div>
    </div>
  )
}
