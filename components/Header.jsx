import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

export default function Header() {
  return (
    <header className="bg-[#F5F9FA] px-5 py-3 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <Breadcrumb className="mb-7 text-lg lg:text-xl">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Course Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 mt-7">
          Starting SEO as your Home
        </h1>
      </div>
    </header>
  );
}
