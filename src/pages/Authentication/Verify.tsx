import { Images } from "assets/Images";
import { Button } from "components/Atoms/Button/Button";
import { Card } from "components/Atoms/Card/Card";
import { CircleButton } from "components/Atoms/CircleButton/CircleButton";
import { Typography } from "components/Atoms/Typography/Typography";
import { HeroSection } from "components/Molecules/HeroSection";
import React from "react";

export const Verify = () => {
  return (
    <div>
      <HeroSection bgSrc={Images.SIGNUPBACKGROUND}>
        <Card>
          <div className="p-5 h-full">
            <div className="flex justify-center items-center mb-2">
              <Typography
                variant="h3"
                isIcon={false}
                className="text-text-primary"
              >
                VERIFY YOUR ACCOUNT
              </Typography>
            </div>
            <div className="flex flex-col gap-5">
              <Button label="Verify your account with X" size="large" />
              <Button
                label="Verify your account with Discord"
                size="large"
                color="secondary"
              />
              <Button
                label="Verify your account with Email OTP"
                size="large"
                color="third"
              />
              <div className="flex justify-center items-center bg-teal-300 h-32 w-full">
              
                hi
              </div>
              <div className="flex justify-center items-center ">
                <CircleButton label="CLAMIN NOW" />
              </div>
            </div>
          </div>
        </Card>
      </HeroSection>
    </div>
  );
};
