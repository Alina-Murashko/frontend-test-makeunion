import { Card } from "../../common/components/card/Card.tsx";
import { Avatar } from "../../common/components/avatar/Avatar.tsx";
import { UserName } from "../../common/components/userName/UserName.tsx";
import { InformationBlock } from "../../common/components/informationBlock/InformationBlock.tsx";
import s from './profileUser.module.scss'
export const ProfileUser = () => {
    const information = 'Во время выполнения тестового задания все переиспользуемые элементы были вынесены' +
        ' в компоненты.' + ' Тестовое задание выполнено с использованием TypeScript. ' +
        'В качестве стейт-менеджера был выбран Redux Toolkit. Слои DAL, UI и бизнес-логики разделены.' +
        'List Users - отображается список , при клике на имя пользователя переходим на страницу данных User.'+
        'Todolist - добавление таски, изменение названия существующей таски, изменение статуса при помощи чекбокса' +
        ', удаление таски.'+
        ' В работе с гитом созданы ветки для разных feature от основной ветки develop.'

    return (
        <section className={s.container}>
            <Card className={s.user}>
                <div className={s.content}>
                    <Avatar src={'https://masterpiecer-images.s3.yandex.net/6fbd86828bbf11ee9d0c261105627a54:upscaled'}/>
                    <UserName name={'Alina Murashko'}/>
                </div>
                <InformationBlock information={information} email={'alinamurashko93@gmail.com'} phone={'+375291585705'}/>
            </Card>
        </section>

    )}