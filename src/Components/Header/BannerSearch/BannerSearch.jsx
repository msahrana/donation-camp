import {Button, Input, Typography} from "@material-tailwind/react";
import React from "react";

const BannerSearch = () => {
  const [email, setEmail] = React.useState("");
  const onChange = ({target}) => setEmail(target.value);

  return (
    <div className="h-[450px]">
      <Typography variant="h2">Material Tailwind</Typography>
      {/* search bar */}
      <div className="relative flex w-full max-w-[60rem] mx-auto">
        <Input
          type="email"
          label="Email Address"
          value={email}
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color={email ? "gray" : "blue-gray"}
          disabled={!email}
          className="!absolute right-1 top-1 rounded"
        >
          Invite
        </Button>
      </div>
    </div>
  );
};

export default BannerSearch;
