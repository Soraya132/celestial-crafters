import Link from "next/link";
const ProjectsBtn = () => {
  return (
    <div className="mx-auto">
      <Link href="#contact">
        <button className="button hover:bg-accent hover:border-transparent px-8 py-2 text-2xl">
          Contact Us
        </button>
      </Link>
    </div>
  );
};
export default ProjectsBtn;
