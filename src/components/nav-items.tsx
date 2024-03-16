"use client";

import { productCategories } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "@/components/nav-item";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div ref={navRef} className="flex gap-4 h-full">
      {productCategories.map((category, index) => {
        const handleOpen = () =>
          activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);

        const isOpen = activeIndex === index;
        return (
          <NavItem
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={activeIndex !== null}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
