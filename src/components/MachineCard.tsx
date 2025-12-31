import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface MachineCardProps {
  id: string;
  name: string;
  description: string | null;
  category: string;
  imageUrl: string | null;
  isFeatured?: boolean;
}

export const MachineCard = ({ id, name, description, category, imageUrl, isFeatured }: MachineCardProps) => {
  return (
    <Link
      to={`/machines/${id}`}
      className="group relative block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-secondary">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 border-2 border-primary/30 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-primary/20 rounded" />
            </div>
          </div>
        )}
      </div>

      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider rounded-full">
          Featured
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs text-primary font-medium uppercase tracking-wider mb-2 block">
              {category}
            </span>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {name}
            </h3>
            {description && (
              <p className="text-muted-foreground text-sm line-clamp-2">
                {description}
              </p>
            )}
          </div>
          <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  );
};
