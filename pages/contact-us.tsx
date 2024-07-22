/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider  } from "../src/components";
import { iSEO } from "../src/shared/interfaces";
import { MINE } from "../BLOG_CONSTANTS/_BLOG_SETUP";

const ContactUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'Contact Me',
        description: 'For any any queries related to this project / template feel free to connect with us on webexpe13@gmail.com',
        keywords: 'webexpx, contact us, webexpe13@gmail.com, next js blog template',
        author: 'Mayur Nalwala, Rupali Yadav'
    } 
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 pb-10 md:pt-20 pt-[80px]'>
                <Text title className="!text-5xl !font-light">
                    Contact Me
                </Text>

                <div className="flex flex-wrap mt-8 justify-between">
                    <div className="w-full pl-2">
                        {
                        MINE.social && <>
                            {
                                MINE.social.map((each) => (
                                    <a href={each.link} key={each.link} target="_blank" rel="noopener noreferrer" className='text-[28px] inline-block mr-5 mt-2'>{each.icon}</a>
                                ))
                            }
                            <hr className='mt-5' />
                        </>
                    }
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default ContactUs