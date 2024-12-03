import {ScrollView} from "react-native";
import Card from "../UI/Card";

const data = [
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Закат в горах"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Утренний лес"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Тихий берег"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Морская гладь"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Голубое небо"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Цветущая долина"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Снежные вершины"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Звёздное небо"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Осенний парк"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Весенний сад"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Река в сумерках"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Мгновение тишины"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Ночной город"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Океанская стихия"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Светлый луг"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Песчаные дюны"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Туманный лес"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Лунная дорожка"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Грозовой горизонт"},
    {"url": "https://i.pinimg.com/236x/81/fc/6f/81fc6faf5b93b41900ac027622c7ba68.jpg", "title": "Рассвет над морем"}
]


export default function ScrollImg() {
    return (
        <ScrollView>
            {data.map(item => <Card item={item} />)}
        </ScrollView>
    )
}