package de.schabelprojects.yugiohcardcreator_backend.YuGiOhCard;

import java.util.Collection;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;



@Service
@RequiredArgsConstructor
public class YugiohCardService {
    
 private final YugiohCardRepository yugiohCardRepository;

 public void createCard(YugiohCard card){
    yugiohCardRepository.save(card);
}

public Collection<YugiohCard> getCards(){
    return yugiohCardRepository.findAll(Sort.by("name"));
}

public YugiohCard getCard(String id){
    return yugiohCardRepository.findById(id).orElse(null);
}

public void deleteCard(String id){
    yugiohCardRepository.deleteById(id);
}

public void changeCard(String id, YugiohCard changedCard){
    YugiohCard card = yugiohCardRepository.findById(id).orElseThrow();

    card.setName(changedCard.getName());
    card.setAttribute(changedCard.getAttribute());
    card.setNormallevel(changedCard.getNormallevel());
    card.setXyzlevel(changedCard.getXyzlevel());
    card.setType(changedCard.getType());
    card.setDescription(changedCard.getDescription());
    card.setAttack(changedCard.getAttack());
    card.setDefence(changedCard.getDefence());
    card.setImage(changedCard.getImage());

    yugiohCardRepository.save(card);
}

public void deleteCards() {
    yugiohCardRepository.deleteAll();
}





}
