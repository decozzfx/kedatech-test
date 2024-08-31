import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const ContactUs = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="contact"
      data-testid="contact"
    >
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Asking Something Please{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Contact Us
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <form
          className="flex flex-col w-full md:w-6/12 lg:w-4/12 mx-auto gap-4"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Email"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
          />
          <Input
            placeholder="Name"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="Name"
          />
          <Input
            placeholder="Message"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="Message"
          />
          <Button>Send</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
