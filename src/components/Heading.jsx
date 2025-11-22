const Heading = ({ className, title, text, tag }) => {
    return (
      <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 text-center`}>
        {tag && (
          <div className="mb-4 md:justify-center text-xs font-bold tracking-widest uppercase text-blue-600">
            {tag}
          </div>
        )}
        {title && <h2 className="h2 text-3xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>}
        {text && <p className="body-1 mt-4 text-gray-500 text-lg">{text}</p>}
      </div>
    );
  };
  
  export default Heading;