import {Button, Input, Typography} from "@material-tailwind/react";

const Banner = ({value, setValue, handleSearch}) => {
  return (
    <div className="relative flex flex-col justify-center items-center  h-[450px]">
      <div className="absolute inset-0 bg-[url('/Resources/bg.png')] bg-cover bg-center bg-no-repeat opacity-10"></div>
      <Typography variant="h2" className="mb-4 text-4xl font-bold">
        I Grow By Helping People In Need
      </Typography>
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="text"
          label="Search Here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="pr-20 text-xl"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color="blue"
          onClick={() => handleSearch()}
          className="!absolute right-1 top-1 rounded"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Banner;
