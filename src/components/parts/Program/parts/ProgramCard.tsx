import Image from "next/image";
import { Avatar, AvatarGroup, Button } from "@nextui-org/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
interface ProgramCardInterface {
  image: string | StaticImport;
  title: string;
}
const ProgramCard = ({ image, title }: ProgramCardInterface) => {
  return (
    <>
      <div className="program-card">
        <div className="overflow-hidden">
          <Image
            src={image}
            alt="program-one-1"
            width={250}
            height={250}
            className="program-img"
          />
        </div>
        <div className="text-white my-3 flex flex-col items-center">
          <p className="text-[20px] font-bold mb-3">{title}</p>
          <AvatarGroup
            isBordered
            max={3}
            total={10}
            renderCount={(count) => (
              <p className="text-small font-medium ms-2 text-white">
                +{count} Ant Commander
              </p>
            )}
            className="justify-start"
          >
            <Avatar
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
            <Avatar
              size="sm"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
            <Avatar
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <Avatar
              size="sm"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
            <Avatar
              size="sm"
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            />
            <Avatar
              size="sm"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
          </AvatarGroup>
          <Button className="bg-white rounded-2xl text-[14px] mt-4">
            Lets Join
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProgramCard;
