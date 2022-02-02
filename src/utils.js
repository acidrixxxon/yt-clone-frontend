export const viewsFormatter = (views) => {
    const viewsLength = views.toString().length
    if (viewsLength >= 6) {
        return views.toString()[0] +',' + views.toString()[1] +'M'
    }
}