import {
  Card,
  CardContent,
} from "@/components/ui/card";
import undraw1 from '../assets/undraw1.png';
import undraw3 from '../assets/undraw3.png';
import undraw4 from '../assets/undraw4.png';
import undraw5 from '../assets/undraw5.png';
import blob1 from '../assets/blob1.png';

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[240px] top-0 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardContent>
          <img
            src={undraw1}
            alt="hero-card-img"
            className="grayscale-[0%] aspect-square object-cover"
          />
        </CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-40 -top-10 w-56 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardContent>
          <img
            src={undraw5}
            alt="hero-card-img"
            className="grayscale-[0%] aspect-square object-cover"
          />
        </CardContent>

      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardContent>
          <img
            src={undraw3}
            alt="hero-card-img"
            className="grayscale-[0%] aspect-square object-cover"
          />
        </CardContent>
      </Card>

      {/* Service */}
      <Card className="absolute w-[300px] right-10 bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardContent>
          <img
            src={undraw4}
            alt="hero-card-img"
            className="grayscale-[0%] aspect-square object-cover"
          />
        </CardContent>
      </Card>

      <img src={blob1} className="absolute -right-60 rotate-180 -z-10" />
    </div>
  );
};
