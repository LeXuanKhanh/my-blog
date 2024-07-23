/**These are necessary imports / components for the page */
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import { ListType } from "../../src/shared/enums";

const Article = () => {
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogwithsidebar>
            
            <Text>Thật ra tiêu đề chính xác hơn là: tại sao đến giờ mình mới viết blog.</Text>
            <Text subtitle>TLDR: mình lười :)</Text>
            <Text>Tính đến nay mình cũng gần 4 năm làm trong ngành IT cơ mà mình chỉ tập trung mỗi phần chuyên môn mình là mobile nên không biết mặt mũi phần web là như thế nào + mấy công ty mình trải qua công việc khá là bận rộn, thời gian để mình nghiên cứu thứ gì đó khác với chuyên môn của mình gần như là không có, tối về thì: </Text>
            <List type={ListType.disc}>
                <li>Ngủ sml</li>
                <li>Chơi game</li>
                <li>OT :')</li>
                <li>Làm freelance với đám bạn (lâu lâu có kèo thơm thì làm)</li>
                <li>Research những thứ liên quan đến chuyên môn mobile của mình</li>
            </List>
            <Text>Với dạo này thị trường IT toàn tuyển fullstack hoặc đòi dev mobile phải làm được cả web nữa nên mình cũng tập tành tự học web bằng cách viết blog (chứ làm course với lab hoài cũng chán)</Text>
            <Text>Về nội dung thì chắc mình đa số sẽ chia sẻ những vấn đề mình giải quyết được trong 4 năm làm mobile của mình (iOS, Flutter, React Native) với 1 số thứ khác liên quan đến ngành. Ngoài ra thì cũng viết 1 số cái linh tinh về cuộc sống, game các kiểu (mà dạo này ít chơi lại rồi, tay giờ chỉ để code bắn Valorant choke vl)</Text>
            <Text>Cho bạn nào thắc mắc thì mình đang <LinkTo href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss" newTab><u>template</u></LinkTo> này do đang học React + NextJS </Text>
        </PageLayout>
    )
}

export default Article;