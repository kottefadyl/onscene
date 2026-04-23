export default function Part4() {
  return (
    <div className="mx-12 mb-30">
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-blue-700 ml-4 mt-20">
        About
      </h2>

      {/* Card */}
      <div className="relative mt-10 rounded-3xl overflow-hidden">
        
        {/* Background image */}
        <div className="bg-[url('/images/1.png')] bg-cover bg-center h-[350px]">
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6 rounded-3xl">
            
            {/* Title */}
            <h3 className="text-5xl font-bold mb-4">
              <span className="text-blue-600">On</span>
              <span className="text-white">Scene</span>x
            </h3>

            {/* Paragraphs */}
            <p className="text-white max-w-3xl text-sm leading-relaxed mb-4">
              OnScene is a digital cultural platform that offers live events,
              masterclasses, and premium content while promoting art and knowledge.
              It allows creators to earn directly from their audience while giving
              users access to high-quality content.
            </p>

            <p className="text-white max-w-3xl text-sm leading-relaxed">
              Thanks to a solidarity-based system, some users can also offer access
              to those who need it. OnScene represents a new way to experience culture:
              fairer, more accessible, and more engaging.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}