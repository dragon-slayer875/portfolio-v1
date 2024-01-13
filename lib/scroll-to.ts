export default function scrollTo(item: React.RefObject<HTMLDivElement> | null) {
    item?.current?.scrollIntoView({ behavior: "smooth" });
}
