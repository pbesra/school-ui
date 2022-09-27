import { Box, Button } from "@mui/material";

const SideBarContent = ({ sideBarItems, onClickButton }) => {

    return (
        <>
            <Box sx={{ width: '100%' }}>
                {
                    sideBarItems.map(({ name, label, onClick, style, isVisible }, index) => {
                        if (isVisible) {
                            return (
                                <Button
                                    className="box"
                                    sx={{
                                        ...style,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderBottom: '1px solid #E7E7E7',
                                        cursor: 'pointer',
                                        borderRadius: 0,

                                    }}
                                    key={`b${index}`}
                                    onClick={() => onClickButton(name)}

                                >
                                    {label}
                                </Button>
                            );
                        }
                    }

                    )
                }
            </Box>
        </>);
}
export default SideBarContent;