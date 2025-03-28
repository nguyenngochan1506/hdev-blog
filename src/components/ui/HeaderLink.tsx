import { NavLink } from "react-router-dom";

const HeaderLink = ({ text, to }: { text:string,to: string}) => {
    return (
        <NavLink to={to} className="transition-colors hover:text-foreground/80">
        {text}
      </NavLink>
    );
    }

    export default HeaderLink;