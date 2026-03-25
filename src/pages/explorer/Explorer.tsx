import { Helmet } from "react-helmet-async";
import FileTree from "../../components/fileTree/FileTree";

const Explorer = () => {
  return (
    <>
      <Helmet>
        <title>Giovanni Leo | Web Developer in Baguio</title>
        <meta
          name="description"
          content="Giovanni Leo is a full stack web developer based in Baguio City, Philippines. in building modern, fast, and user-friendly websites."
        />
        <meta
          name="keywords"
          content="Giovanni Leo, web developer Baguio, full stack developer Philippines"
        />
        <meta property="og:title" content="Giovanni Leo | Web Developer" />
        <meta
          property="og:description"
          content="Full stack web developer building modern web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://giovanni.upsertsolution.com" />
        <meta
          property="og:image"
          content="https://giovanni.upsertsolution.com/images/giovanni-leo.jpg"
        />
        <meta property="og:image:alt" content="Giovanni Leo" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Giovanni Leo",
            url: "https://giovanni.upsertsolution.com",
            image: {
              "@type": "ImageObject",
              url: "https://giovanni.upsertsolution.com/images/giovanni-leo.jpg",
              caption: "Giovanni Leo",
            },
          })}
        </script>
      </Helmet>
      <div className="h-full overflow-y-auto bg-surface/80">
        <div className="p-2">
          <p className="text-xs text-text-muted uppercase tracking-wide">
            Explorer
          </p>
        </div>
        <FileTree />
      </div>
    </>
  );
};

export default Explorer;
