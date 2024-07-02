import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImage from "@/components/ProductImage";


const SinglePage = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16">
            {/* IMAGE */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImage />
            </div>

            {/* TEXTS */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h2 className=" text-4xl font-medium">Product Name</h2>
                <p className=" text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam deleniti earum consectetur deserunt dolores, ex similique iste provident dolorum aut modi, at quidem quisquam nesciunt, harum enim sapiente facere?</p>
                <div className="h-[2px] bg-gray-100" />
                <div className="flex items-center gap-4">
                    <h3 className="text-xl text-gray-500 line-through">$59</h3>
                    <h3 className=" font-medium text-2xl">$49</h3>
                </div>
                <div className="h-[2px] bg-gray-100" />
                <CustomizeProducts />
                <Add />
                <div className="h-[2px] bg-gray-100" />
                <div className="text-sm">
                    <h4 className=" font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quos commodi quidem. Alias dignissimos sed reiciendis tenetur quo ducimus odio aut illum ex saepe a, voluptatibus fugiat molestias quidem aperiam.</p>
                </div>
                <div className="text-sm">
                    <h4 className=" font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quos commodi quidem. Alias dignissimos sed reiciendis tenetur quo ducimus odio aut illum ex saepe a, voluptatibus fugiat molestias quidem aperiam.</p>
                </div>
                <div className="text-sm">
                    <h4 className=" font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quos commodi quidem. Alias dignissimos sed reiciendis tenetur quo ducimus odio aut illum ex saepe a, voluptatibus fugiat molestias quidem aperiam.</p>
                </div>
            </div>
        </div>
    )
}

export default SinglePage;