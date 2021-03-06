import React from 'react'
import styles from './paragraphGroup.scss'
import View from "../Icon/View";
import ImageReveal from "../ImageRevealer";
import IconButton from "../IconButton";
import Link from 'next/link';
import {TweenMax} from "gsap";
import ScrollableText from "../Global/ScrollableText";
import TitleRevealer from "../TitleRevealer/TitleRevealer";
import SubtitleRevealer from "../TitleRevealer/SubtitleRevealer";


const ParagraphGroup = ({
                            id,
                            title,
                            text,
                            split = false,
                            subtitle = false,
                            collection = false,
                            image,
                            actionLink = false,
                        }) => (
    <li className={styles.wrapper}>
        <div className={styles.inner}>
            <div className={styles.header}>
                {subtitle && <SubtitleRevealer subtitle={subtitle}/>}
                {collection && <SubtitleRevealer collection={collection}/>}

                {title && <TitleRevealer title={title} split={split}/>}

                {actionLink &&
                <Link href={`/products?collection=${id}&${actionLink._modelApiKey}=${actionLink.id}`} prefetch>
                    <IconButton title={'view'} top>
                        <View/>
                    </IconButton>
                </Link>
                }
            </div>

            <div className={styles.body}>
                <ScrollableText className={'text'} text={text}/>
            </div>

        </div>

        {image &&
        <div className={styles.inner}>

            <ImageReveal src={image.url} paragraph/>

        </div>
        }
    </li>
);

export default ParagraphGroup