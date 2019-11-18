package library.controllers;

import library.bindingModels.BookBindingModel;
import library.entities.Book;
import library.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class BookController {
    private final BookRepository bookRepository;

    @Autowired
    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }


    @GetMapping("/")
    public ModelAndView index(ModelAndView modelAndView) {

        List<Book> books = this.bookRepository.findAll();

        modelAndView.setViewName("base-layout");
        modelAndView.addObject("view", "book/Index");
        modelAndView.addObject("books", books);

        return modelAndView;
    }

    @GetMapping("/create")
    public ModelAndView create(ModelAndView modelAndView) {

        modelAndView.setViewName("base-layout");
        modelAndView.addObject("view", "book/Create");

        return modelAndView;
    }

    @PostMapping("/create")
    public String create(Book book) {
        this.bookRepository.saveAndFlush(book);
        return "redirect:/";
    }

    @GetMapping("/edit/{id}")
    public ModelAndView edit(@PathVariable(value = "id") Integer id, ModelAndView modelAndView) {

        Book book = this.bookRepository.findById(id).get();

        modelAndView.setViewName("base-layout");
        modelAndView.addObject("view", "book/Edit");
        modelAndView.addObject("book", book);

        return modelAndView;
    }

    @PostMapping("edit/{id}")
    public String edit(@PathVariable(value = "id") Integer id, BookBindingModel bookBindingModel) {

        Book bookToEdit = this.bookRepository.findById(id).get();

        bookToEdit.setTitle(bookBindingModel.getTitle());
        bookToEdit.setAuthor(bookBindingModel.getAuthor());
        bookToEdit.setPrice(bookBindingModel.getPrice());

        this.bookRepository.saveAndFlush(bookToEdit);
        return "redirect:/";
    }

    @GetMapping("/delete/{id}")
    public ModelAndView remove(@PathVariable(value = "id") Integer id, ModelAndView modelAndView) {

        Book book = this.bookRepository.findById(id).get();

        modelAndView.setViewName("base-layout");
        modelAndView.addObject("view", "book/Remove");
        modelAndView.addObject("book", book);

        return modelAndView;
    }

    @PostMapping("/delete/{id}")
    public String remove(@PathVariable(value = "id") Integer id) {

        this.bookRepository.deleteById(id);

        return "redirect:/";
    }
}