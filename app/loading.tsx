import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex space-y-3 flex-col items-center justify-center">
      <Spinner size="lg"></Spinner>
      <p>Loading...</p>
    </div>
  );
}
