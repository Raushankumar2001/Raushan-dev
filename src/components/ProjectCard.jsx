import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, tags, image }) => {
  return (
    <div className="group rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        {image ? (
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
        ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                <span className="font-medium">No Image</span>
            </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <button className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View Project <ExternalLink size={14} />
            </button>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent uppercase tracking-wide">
            {tags}
            </span>
        </div>
        
        <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-muted leading-relaxed mb-6 flex-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
