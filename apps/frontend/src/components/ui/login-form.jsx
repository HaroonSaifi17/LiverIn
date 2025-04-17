import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User } from "lucide-react"; // Using Lucide icons for better UI
import { NavLink } from "react-router-dom";

export function LoginForm({
  className,
  onLoginSuccess, // Optional callback for successful login
  onForgotPassword, // Optional callback for forgot password
  onSignUpClick, // Optional callback for sign up
  ...props
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    event.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === "test@example.com" && password === "password") {
        console.log("Login successful!");
        if (onLoginSuccess) {
          onLoginSuccess({ email });
        }
      } else {
        setError("Invalid email or password.");
      }
    }, 1500);
  };

  return (
    <div
      className={cn("flex flex-col gap-6 w-full max-w-md", className)}
      {...props}
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-blue-700">
            Welcome to WorkAura
          </CardTitle>
          <CardDescription>
            Log in to connect with professionals and find opportunities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">
                  <Mail className="mr-2 h-4 w-4 inline-block" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your professional email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">
                  <Lock className="mr-2 h-4 w-4 inline-block" />
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Your secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full bg-blue-700" disabled={loading}>
                {loading ? "Logging in..." : "Log In"}
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            <a
              href="#forgot-password"
              className="underline underline-offset-2 text-muted-foreground hover:text-primary"
              onClick={(e) => {
                e.preventDefault();
                if (onForgotPassword) {
                  onForgotPassword();
                } else {
                  console.log("Forgot password clicked");
                  // Implement your forgot password navigation here
                }
              }}
            >
              Forgot password?
            </a>
          </div>
        </CardContent>
      </Card>
      <div className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <NavLink to={"/signup"} className={'text-blue-600'} variant="link" size="sm" onClick={onSignUpClick}>
          Sign up on WorkAura
        </NavLink>
      </div>
    </div>
  );
}
