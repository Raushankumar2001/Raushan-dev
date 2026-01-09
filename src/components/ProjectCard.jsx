import React from 'react';

const ProjectCard = ({ title, description, tags, imagePlaceholder }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="aspect-w-16 aspect-h-10 bg-gray-100 w-full h-64 relative overflow-hidden">
        {/* Placeholder for project image - using a subtle pattern or simple background */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
          {imagePlaceholder || (
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          )}
        </div>
        {tags && (
           <div className="absolute top-4 left-4">
             <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary shadow-sm backdrop-blur-sm">
               {tags}
             </span>
           </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
        <button className="text-sm font-semibold text-primary group-hover:text-accent transition-colors inline-flex items-center">
          View Project 
          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
