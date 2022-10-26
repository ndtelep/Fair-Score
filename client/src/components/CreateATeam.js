import React, { useState } from "react";
import { Button, Error, Input, FormField, Label, Textarea } from "../styles";

function CreateATeam({ onLogin }) {
  const [nickName, setNickName] = useState("");
  const [location, setLocation] = useState("");
  const [homeVenue, setHomeVenue] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");
  const [player5, setPlayer5] = useState("");
  const [player6, setPlayer6] = useState("");
  const [player7, setPlayer7] = useState("");
  const [player8, setPlayer8] = useState("");
  const [player9, setPlayer9] = useState("");
  const [player10, setPlayer10] = useState("");
  const [player11, setPlayer11] = useState("");
  const [player12, setPlayer12] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location: location,
        homeVenue: homeVenue,
        nickName: nickName,
        image_url: imageUrl,
        players :{
        player1: player1,
        player2: player2,
        player3: player3,
        player4: player4,
        player5: player5,
        player6: player6,
        player7: player7,
        player8: player8,
        player9: player9,
        player10: player10,
        player11: player11,
        player12: player12,
        }

        
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password Confirmation</Label>
        <Input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

export default CreateATeam;