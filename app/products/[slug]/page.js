import Slug from "@/app/components/Slug";

const SlugRouter = ({params}) => {
    
    
   return(
      <Slug title={params.slug} />
   )

}

export default SlugRouter;
