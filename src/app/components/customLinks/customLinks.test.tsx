import React from "react";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import user from "@testing-library/user-event" 
import CustomLinks from "./customLinks";


describe("CustomLinks", () => {
    it("Should renders correcly", () => {
        render(<CustomLinks />)
        const element = screen.getByTestId("customLinks")
        expect(element).toBeInTheDocument()        
    })
    it("should add a link when a click on the btn", async () => {
        user.setup()
        render(<CustomLinks />)
        const button = screen.getByTestId("addNewLinkButton")
        await user.click(button)
        const link = screen.getByTestId("link")
        expect(link).toBeInTheDocument()
    })
})