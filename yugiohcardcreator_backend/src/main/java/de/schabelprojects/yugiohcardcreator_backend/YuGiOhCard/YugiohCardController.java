package de.schabelprojects.yugiohcardcreator_backend.YuGiOhCard;

import java.util.Collection;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/cards")
@CrossOrigin(origins = {"http://localhost:5173"})
public class YugiohCardController {

    private final YugiohCardService yugiohCardService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Collection<YugiohCard> createCard(@RequestBody YugiohCard card){
        yugiohCardService.createCard(card);
        return yugiohCardService.getCards();
    }

    @GetMapping
    public Collection<YugiohCard> getCards(){
        return yugiohCardService.getCards();
    }

   @GetMapping("/{id}")
   public YugiohCard getCard(@PathVariable String id){
        return yugiohCardService.getCard(id);
   }

    @PutMapping("/{id}")
    public Collection<YugiohCard> changeCard(@PathVariable String id, @RequestBody YugiohCard card){
        yugiohCardService.changeCard(id, card);
        return yugiohCardService.getCards();
    }

    @DeleteMapping("/{id}")
    public Collection<YugiohCard> deleteCard(@PathVariable String id){
        yugiohCardService.deleteCard(id);
        return yugiohCardService.getCards();
    }

    @DeleteMapping()
    public Collection<YugiohCard> deleteCard(){
        yugiohCardService.deleteCards();
        return yugiohCardService.getCards();
    }

}
