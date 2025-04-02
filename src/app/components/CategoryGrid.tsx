import React from "react";
import { CategoryCard } from "./CategoryCard";
import { CategoryIcons } from "./icon/index";

export const CategoryGrid: React.FC = () => {
  const categories = [
    { icon: <CategoryIcons.Design />, title: "Design", count: 235 },
    { icon: <CategoryIcons.Sales />, title: "Sales", count: 756 },
    {
      icon: <CategoryIcons.Marketing />,
      title: "Marketing",
      count: 140,
      highlighted: true,
    },
    { icon: <CategoryIcons.Finance />, title: "Finance", count: 325 },
    { icon: <CategoryIcons.Technology />, title: "Technology", count: 436 },
    { icon: <CategoryIcons.Engineering />, title: "Engineering", count: 542 },
    { icon: <CategoryIcons.Business />, title: "Business", count: 211 },
    {
      icon: <CategoryIcons.HumanResource />,
      title: "Human Resource",
      count: 346,
    },
  ];

  return (
    <div className="flex flex-col items-start gap-8 w-full">
      <div className="flex items-start gap-8 w-full max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1">
        {categories.slice(0, 4).map((category, index) => (
          <CategoryCard
            key={`category-1-${index}`}
            icon={category.icon}
            title={category.title}
            jobCount={category.count}
            isHighlighted={category.highlighted}
          />
        ))}
      </div>
      <div className="flex items-start gap-8 w-full max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1">
        {categories.slice(4).map((category, index) => (
          <CategoryCard
            key={`category-2-${index}`}
            icon={category.icon}
            title={category.title}
            jobCount={category.count}
            isHighlighted={category.highlighted}
          />
        ))}
      </div>
    </div>
  );
};
