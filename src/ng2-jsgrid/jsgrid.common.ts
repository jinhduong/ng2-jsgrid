export class Common {
    public static gridIsEmpty($grid) {
        if (!$grid) return true;
        return $grid.html() === '';
    }
};
