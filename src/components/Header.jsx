import Container from "./Container";

function Header() {
  return (
    <div className="fixed  z-50 flex h-[60px] w-screen items-center justify-center bg-red-400">
      <Container>
        {/* Desktop & Tablet */}
        <div className="hidden h-full w-full bg-green-500 md:flex">Header</div>
        {/* Mobile */}
        <div className="flex h-full w-full bg-slate-500 md:hidden">Header</div>
      </Container>
    </div>
  );
}

export default Header;
