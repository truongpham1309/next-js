import Link from "next/link";
import { Fragment } from "react";

const FirstPost = () => {
   return (
      <Fragment>
         <div>FirstPost</div>
         <Link href="/">
            Back to home
         </Link>
      </Fragment>
   );
};

export default FirstPost;
