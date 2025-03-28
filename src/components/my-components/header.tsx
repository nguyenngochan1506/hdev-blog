// components/header.tsx
import HeaderLink from "./../ui/HeaderLink";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo/Brand */}
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">H-Dev Blog</span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-md font-medium">
          <HeaderLink text="Trang chủ" to="/hdev-blog" />
          <HeaderLink text="Java" to="/hdev-blog/java" />
          <HeaderLink text="Spring Boot" to="/hdev-blog/spring-boot" />
        </nav>
        {/* Right side controls */}
        <div className="flex flex-1 items-center justify-end space-x-2"></div>
      </div>
    </header>
  );
}
