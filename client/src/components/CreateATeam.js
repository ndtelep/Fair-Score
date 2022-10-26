import React, { useState } from "react";
import { Button, Error, Input, FormField, Label, Textarea } from "../styles";

function CreateATeam() {
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
 
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location: location,
        home_venue: homeVenue,
        nickname: nickName,
        image_url: imageUrl,
        // players :{
        // player1: player1,
        // player2: player2,
        // player3: player3,
        // player4: player4,
        // player5: player5,
        // player6: player6,
        // player7: player7,
        // player8: player8,
        // player9: player9,
        // player10: player10,
        // player11: player11,
        // player12: player12,
        // }

        
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((team) =>(team));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Team Name</Label>
        <Input
          type="text"
          id="nickName"
          autoComplete="off"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Location</Label>
        <Input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Home Venue</Label>
        <Input
          type="text"
          id="home-venue"
          value={homeVenue}
          onChange={(e) => setHomeVenue(e.target.value)}
          
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Team Logo</Label>
        <Input
          type="text"
          id="team-logo"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      {/* <FormField>
        <Label htmlFor="password">Player 1</Label>
        <Input
          type="text"
          id="p1"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Player 2</Label>
        <Input
          type="text"
          id="p2"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Player 3</Label>
        <Input
          type="text"
          id="p3"
          value={player3}
          onChange={(e) => setPlayer3(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Player 4</Label>
        <Input
          type="text"
          id="p4"
          value={player4}
          onChange={(e) => setPlayer4(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Player 5</Label>
        <Input
          type="text"
          id="p5"
          value={player5}
          onChange={(e) => setPlayer5(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Player 6</Label>
        <Input
          type="text"
          id="p6"
          value={player6}
          onChange={(e) => setPlayer6(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Player 7</Label>
        <Input
          type="text"
          id="p7"
          value={player7}
          onChange={(e) => setPlayer7(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Player 8</Label>
        <Input
          type="text"
          id="p8"
          value={player8}
          onChange={(e) => setPlayer8(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Player 9</Label>
        <Input
          type="text"
          id="p9"
          value={player9}
          onChange={(e) => setPlayer9(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Player 10</Label>
        <Input
          type="text"
          id="p10"
          value={player10}
          onChange={(e) => setPlayer10(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Player 11</Label>
        <Input
          type="text"
          id="p11"
          value={player11}
          onChange={(e) => setPlayer11(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Player 12</Label>
        <Input
          type="text"
          id="p12"
          value={player12}
          onChange={(e) => setPlayer12(e.target.value)}
          autoComplete="current-password"
        /> */}
      {/* </FormField> */}
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Submit Team"}</Button>
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