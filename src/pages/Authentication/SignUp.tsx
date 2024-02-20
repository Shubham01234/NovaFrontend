import { Images } from "assets/Images";
import { Card } from "components/Atoms/Card/Card";
import { CircleButton } from "components/Atoms/CircleButton/CircleButton";
import { Textfield } from "components/Atoms/Textfield/Textfield";
import { Typography } from "components/Atoms/Typography/Typography";
import { HeroSection } from "components/Molecules/HeroSection";

export const SignUp = () => {
  return (
    <div>
      <HeroSection bgSrc={Images.SIGNUPBACKGROUND}>
        <Card>
          <div className="h-full p-5">
            <div className="flex justify-center items-center mb-2">
              <Typography
                variant="h3"
                isIcon={false}
                className="text-text-primary"
              >
                DATA COLLECTION
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <Typography isIcon={true} font="regular" variant="p">
                Choose Username
              </Typography>
              <Textfield placeHolder="Choose Username" />
              <Typography isIcon={true} font="regular" variant="p">
                Email
              </Typography>
              <Textfield placeHolder="Email" />
              <Typography isIcon={true} font="regular" variant="p">
                Refferal (Optional)
              </Typography>
              <Textfield placeHolder="Hedera ID" />
              <Typography isIcon={true} font="regular" variant="p">
                Avatar (Optional)
              </Typography>
              <Textfield placeHolder="Select NFT from Hedera wallet" />
              <div className="flex justify-center items-center mt-2">
                <CircleButton  label="CONTINUE"/>
              </div>
            </div>
          </div>
        </Card>
      </HeroSection>
    </div>
  );
};
