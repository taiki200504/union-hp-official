interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <div
      className="relative bg-gradient-to-br from-[#066ff2] to-[#ec4faf] py-16 md:py-24"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(6, 111, 242, 0.85), rgba(236, 79, 175, 0.85)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-white opacity-90 max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  )
}

export default PageHeader
