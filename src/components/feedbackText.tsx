import { BlackMText } from "./textsAndSizes";

interface FeedBackTextProps {
  text: string;
}

export const FeedBackText: React.FC<FeedBackTextProps> = ({ text }) => {
  return (
    <>
      <BlackMText>{text}</BlackMText>
    </>
  );
};
